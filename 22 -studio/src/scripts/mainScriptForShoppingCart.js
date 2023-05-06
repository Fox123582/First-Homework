import {reDraw} from "./SignInPage.js";
import {getDataForShoppingCartAndAccount} from "./drawTableForCartAndAccount.js";
import {cartCounter} from "./cartCounter.js";
import {completeOrder} from "./completeOrder.js";

reDraw()
getDataForShoppingCartAndAccount('shoppingCart')
cartCounter()
completeOrder()
