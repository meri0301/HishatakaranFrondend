import ExampleController from "../controllers/exampleController.js";

import SDKManager from "./sdkManager.js";
import SelectorManager from "./selectorManager.js";

const example = new ExampleController(SelectorManager.exampleSelector, SDKManager.exampleSDK);


export {
    example,
}