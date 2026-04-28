import {networkService} from "./serviceManager.js";

import ExampleSDK from "../api-sdk/exampleSDK.js";

const exampleSDK = new ExampleSDK(networkService);

export default {
    exampleSDK,
}