import { Component, Input } from "@angular/core";

@Component({
    selector: "my-button",
    standalone: true,
    templateUrl: "./button.component.html",
    styleUrls: ["./button.component.css"],
})

export class Button {
    buttonText: string = "Click Me!";
    @Input() label: string = "";

    // Event binding
    // É necessário declarar a função que será utilizada dentro da classe.
    getAlert() {
        alert("Botão foi clicado!")
        alert(this.label)
    }
}