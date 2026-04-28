import ExampleActionTypes from '../actions/example/exampleActionTypes.js'
import {example} from "../../managers/controllerManager.js";

export default function exampleRegistration(configs) {
    configs.set(ExampleActionTypes.GET_EXAMPLE_DATA, example.getExamples);
}