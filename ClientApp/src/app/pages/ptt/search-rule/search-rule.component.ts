import { PttSearchRule } from './../../../api/models/ptt-search-rule';
import { PttSpiderService } from './../../../api/services/ptt-spider.service';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { ConfirmationService } from 'primeng/api';

@Component({
  selector: 'app-ptt',
  templateUrl: './search-rule.component.html',
  styleUrls: ['./search-rule.component.scss']
})
export class SearchRuleComponent implements OnInit {
  products: PttSearchRule[] = [];
  itemEditDialog: boolean = false;
  editItem: PttSearchRule = {};
  editItemForm!: FormGroup<ItemForm>;
  constructor(
    private pttSpiderService: PttSpiderService,
    private confirmationService: ConfirmationService
  ) { }

  ngOnInit(): void {
    this.pttSpiderService.apiPttSpiderGet$Json()
      .subscribe({
        next: (value) => {
          this.products = value;
        }
      });
  }

  onNewClick() {
    this.itemEditDialog = true;
    this.editItem = {};
    this.editItemForm = new FormGroup<ItemForm>({
      BoardName: new FormControl(this.editItem.boardName),
      SearchRegx: new FormControl(this.editItem.searchRegx),
    });
  }
  onEditClick(item: PttSearchRule) {
    this.itemEditDialog = true;
    this.editItem = item;
    this.loadFormgroup();
  }
  onDeleteClick(item: PttSearchRule) {
    this.confirmationService.confirm({
      message: 'Are you sure that you want to delete this item?',
      accept: () => {
        this.pttSpiderService.apiPttSpiderDelete$Json({body: item})
        .subscribe({ next: (value) => { if (value != null) this.itemEditDialog = false; this.ngOnInit(); } });
      }
    });
  }
  onSaveClick() {
    this.loadItem();
    if (this.editItem.id === undefined) {
      this.pttSpiderService.apiPttSpiderPost$Json({ body: this.editItem })
        .subscribe({ next: (value) => { if (value != null) this.itemEditDialog = false; this.ngOnInit(); } });
    }
    else {
      this.pttSpiderService.apiPttSpiderPut$Json({ body: this.editItem })
        .subscribe({ next: (value) => { if (value != null) this.itemEditDialog = false; this.ngOnInit(); } });
    }
  }
  loadFormgroup() {
    this.editItemForm = new FormGroup<ItemForm>({
      BoardName: new FormControl(this.editItem.boardName),
      SearchRegx: new FormControl(this.editItem.searchRegx),
    });
  }
  loadItem() {
    this.editItem.boardName = this.editItemForm.controls.BoardName.value;
    this.editItem.searchRegx = this.editItemForm.controls.SearchRegx.value;
  }
}
interface ItemForm {
  BoardName: FormControl<string | null | undefined>;
  SearchRegx: FormControl<string | null | undefined>;
}
