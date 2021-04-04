export class Model {

    id:number;
    modelName:string;
    modelDesc:string;
    learnMoreLink:string;

    public Model(id, modelName, modelDesc, learnMoreLink) {
		this.id = id;
		this.modelName = modelName;
		this.modelDesc = modelDesc;
		this.learnMoreLink = learnMoreLink;
	}
}
