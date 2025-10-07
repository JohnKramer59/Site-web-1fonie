// Force un export par défaut même si Contact.jsx n'en fournit pas
import * as Mod from "../Contact.jsx";
const Comp = Mod.default ?? Mod.Contact ?? (() => null);
export default Comp;
