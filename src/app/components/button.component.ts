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
    getAlert(teste: string) {
        // É possível colocar parâmetros para serem enviados dentro do evento de click na função
        // Se olhar no "button.component.html" haverá uma string sendo enviada.
        alert("Botão foi clicado!")
        alert(this.label)
        alert(teste)
    }
}