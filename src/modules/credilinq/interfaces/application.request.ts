
export interface IConditions {
  conditions: {
    one: string
    two: string
    three: string
  };
  active: {
    one: boolean
    two: boolean
    three: boolean
  }
}

export interface IApplicationForm {
  businessUEN: string;
  businessName: string;
  fullname: string;
  position: string;
  mobile: string;
  email: string,
  filenames: string[];
  termsAndConditions: IConditions;
}