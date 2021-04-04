export class Insurance {
    
    portfolio_name : string;
    sector : string;
    Business_risk_profile : string;
    financial_risk_profile : string;
    anchor : string;
    SACP : string;
    illustrative_credit_rating : string;
    last_updated_date : string;

    public Insurance(portfolio_name, sector, business_risk_profile, financial_risk_profile,
         anchor, sACP, illustrative_credit_rating, last_updated_date) {
    this.portfolio_name = portfolio_name;
    this.sector = sector;
    this.Business_risk_profile = business_risk_profile;
    this.financial_risk_profile = financial_risk_profile;
    this.anchor = anchor;
    this.SACP = sACP;
    this.illustrative_credit_rating = illustrative_credit_rating;
    this.last_updated_date = last_updated_date;
}
}
