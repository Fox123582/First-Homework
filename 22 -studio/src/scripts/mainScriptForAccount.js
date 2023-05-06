import {getDataForShoppingCartAndAccount} from "./drawTableForCartAndAccount.js";
import {reDraw} from "./SignInPage.js";
import {cartCounter} from "./cartCounter.js";
import {butDeleteAccount, displayNameEmail} from "./displayInfoAndDeleteAccount.js";

getDataForShoppingCartAndAccount('orders')
reDraw()
cartCounter()
displayNameEmail()
butDeleteAccount()