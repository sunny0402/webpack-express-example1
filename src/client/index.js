import { checkForName } from "./js/nameChecker";
import { handleSubmit } from "./js/formHandler";

/*because of the dependency tree that webpack builds, 
if nothing ever is imported, it’s as if it doesn’t exist.*/

import "./styles/resets.scss";
import "./styles/base.scss";
import "./styles/footer.scss";
import "./styles/form.scss";
import "./styles/header.scss";

console.log(checkForName);

alert("I EXIST");

export { checkForName, handleSubmit };
