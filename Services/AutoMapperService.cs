
using AutoMapper;
using AutoMapper.Internal;

public class AutoMapperService
{
    public IMapper Mapper { get; set; }
    public AutoMapperService()
    {
        var config = new MapperConfiguration(cfg => cfg.AddProfile<MappingProfile>());
        config.AssertConfigurationIsValid();
        this.Mapper = config.CreateMapper();
    }

    public string? PropertyNameSwitch<TSrc, TDst>(string sourceProperty)
    {
        var map = Mapper.ConfigurationProvider.Internal().FindTypeMapFor<TSrc, TDst>();

        var propertyMap = map.PropertyMaps
                              .FirstOrDefault(pm =>
                                    pm?.SourceMember?.Name?.ToUpper() == sourceProperty.ToUpper()
                              );
        if (propertyMap == null)
            return sourceProperty;
        return propertyMap?.DestinationMember.Name;
    }
}
public class MappingProfile : Profile
{
    public MappingProfile()
    {
        CreateMap<Account, AccountViewModel>()
        .ForMember(des => des.Id, opt => opt.MapFrom(src => src.Id))
        .ForMember(des => des.Name, opt => opt.MapFrom(src => src.Name))
        .ForMember(des => des.Email, opt => opt.MapFrom(src => src.Email))
        .ForMember(des => des.Picture, opt => opt.MapFrom(src => src.Picture))
        .ReverseMap();
    }
}
