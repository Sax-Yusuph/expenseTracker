import { Invoice } from "./classes/invoice.js"
import { Payment } from "./classes/payment.js"
import { HasFormatter } from "./interfaces/hasFormatter.js"
import { ListTemplate } from "./classes/ListTemplate.js";




const form = document.querySelector(".new-item-form") as HTMLFormElement;
const type = document.querySelector("#type") as HTMLSelectElement;
const tofrom = document.querySelector("#tofrom") as HTMLInputElement;
const details = document.querySelector("#details") as HTMLInputElement;
const amount = document.querySelector("#amount") as HTMLInputElement;
const ul = document.querySelector(".item-list") as HTMLUListElement

let doc: HasFormatter;
let output = new ListTemplate(ul);



form.addEventListener('submit', (e: Event)=>{
    e.preventDefault();
    if(type.value === "invoice"){
        doc= new Invoice(tofrom.value, details.value, amount.valueAsNumber)
    }else{
        doc= new Payment(tofrom.value, details.value, amount.valueAsNumber)
    }
    output.render(doc, type.value, "start" )
})
 