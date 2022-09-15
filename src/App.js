import NavBar from "./NavBar"
import Corpo from "./Corpo"

export default function App() {
    return (
        <div class="bodyTodo">
            <NavBar></NavBar>
            <Corpo></Corpo>

            <div class="fundo-mobile">
                <ion-icon name="home"></ion-icon>
                <ion-icon name="search-outline"></ion-icon>
                <ion-icon name="add-circle-outline"></ion-icon>
                <ion-icon name="heart-outline"></ion-icon>
                <ion-icon name="person-outline"></ion-icon>
            </div>
        </div>
    )
}