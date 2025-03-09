/* tslint:disable */
/* eslint-disable */
import { DeliveryContext } from '../models/delivery-context';
import { Link } from '../models/link';
import { Message } from '../models/message';
import { Source } from '../models/source';
export interface Event {
  deliveryContext?: DeliveryContext;
  link?: Link;
  message?: Message;
  mode?: null | string;
  replyToken?: null | string;
  source?: Source;
  timestamp?: number;
  type?: null | string;
  webhookEventId?: null | string;
}
