export type CallType = {
  id: number;
  date: string;
  date_notime: string;
  in_out: number;
  time: number;
  person_id: number;
  person_avatar: string;
  from_number: string;
  to_number: string;
  source: string;
  partner_data: PartnerType;
};

export type PartnerType = {
  id: string;
  name: string;
  phone: string;
};
