import { Translations } from "..";

export const EnglishTranslations: Translations = {
    WelcomeName: "Üdvözlünk a skeld.net-en",
    WelcomeMessage: `
A világ első egyedi Among Us szervere
Írd be hogy /help hogy segítséget kapj.
Jelenlegi játékmód: @{gamemode[0]}
Iratkozz fel a Patreonunkra https://www.patreon.com/skeld_net hogy szines nevet kapj!`.trim(),
    SetImpostorsInvalidCount:
        "Nem megfelő, kérlek adj meg egy számot 1 és 3 között.",
    SetImpostorsSuccess: "Imposztorok száma: @{number[0]}",
    ZombiesIncomingIn: "Zombik érkeznek @{number[0]} másodperc múlva.",
    GamemodeChangedTo: "Új játékmód: @{gamemode[0]}",
    SquidGameLightsInstructions:
        "Nyomd meg a gyűlés gombot mielőtt elfogy az idő!",
    SquidGameDalgonaInstructions:
        "Készítsd el az összes feladatodat mielőtt elfogy az idő!",
    SquidGameTugOfWarInstructions:
        "Mozogj a megfelő irányba hogy húzd az ellenséges csapatot!",
    StartingIn: "Kezdés: ",
    MaxPlayersModeSwitch:
        "A tulaj átállította a játékmódot így a szoba megtelt.",
    InvalidMap: "Nem megfelő pálya, elérhető pályák: ",
    MapChanged: "Pálya átállítva: ",
    InvalidColour: "Nem megfelelő szín, elérhető színek: ",
    GamemodeDoesntExist: "A @{text[0]} játékód nem létezik!",
    InvalidMaxPlayers:
        "Nem megfelelő maximális játékosszám. Adj meg egy számot 4-től @{number[0]}-ig.",
    MaxPlayersChanged: "Maximális játékosszám: @{text[0]}",
    QuickChatWarning: `
A chat-ed ki van kapcsolva.
Kérlek állítsd át hogy a parancsokat használhatsd.
Főmenü > Beállítások > Data > Chat Type`.trim(),
};