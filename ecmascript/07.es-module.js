// named export  => import { a,b,c }
// default export  => import 내맘대로 from '...'

import { b as B, c } from "./lib";
import aFunc from "./a";

a();
B();
c();

((A) => {
  A();
})(a);
