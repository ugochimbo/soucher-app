
import * as Card from "../Util/Card";

export const formatNameOnCard = (formState) => {
    return formState.nameOnCard || Card.name(formState.buyerName);
};
