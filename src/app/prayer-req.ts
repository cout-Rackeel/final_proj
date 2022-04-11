export interface PrayerReq {
  name:string;
  title:string;
  date:Date;
  request:string;
  peoplePraying:[];
  status:boolean;
  users:[]
}
