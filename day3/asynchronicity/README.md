# Zadanie 1
## Opis

Zaimplementuj aplikację wyświetlającą temperaturę w wybranym mieście. Miasto podawane jest w polu tekstowym i zatwierdzane przyciskiem `ENTER`. Skorzystaj z serwisu `https://openweathermap.org`

**Poglądowy UI:**

<img src="./example.png" width="400">

## Podpowiedzi

**Rejestracja:**
https://home.openweathermap.org/users/sign_up

**Generowanie klucza:**
https://home.openweathermap.org/api_keys

**`API` do pobrania temperatury po nazwie miasta:**<br>
https://openweathermap.org/current#name

**Pobranie danych o temperaturze z miasta Warszawa:**<br>
https://api.openweathermap.org/data/2.5/weather?q=Warszawa&appid={Your API key}

**To co wyżej ale w stopniach Celsjusza**
https://api.openweathermap.org/data/2.5/weather?q=Warszawa&appid={Your API key}&units=metric

**Implementacja**
- skorzystaj z obługi zdarzenia `keydown`
    ```javascript
    myInput.addEventListener('keydown', event => {
        //...
    })
    ```
- weryfikacja wciśnięcia klawisza przez pole `event.code`
- pobranie danych z serwisu:
    ```js
    fetch(url)
        .then(response => response.json())
        .then(data => {
            // aktualizacja widoku
        })
        .catch(err => {
            // obsługa błędu
        })
    ```

<br>
<br>

# Zadanie 2
## Opis
Zwyczajny `fetch` konczy się wraz z niepowodzeniem wykonania żądania. Nie radzi sobie z takimi problemami jak:
- **server overload** - `503 Service Unavailable` (wysoki ruch)
- **temporary network errors** - niestabilność sieci
- **rate limits** - `429 Too May Requets` przekroczono dopuszczalny kimit

Celem tego zadania jest zaimplementowanie funkcji `fetchWithRetry(url: string)` a następnie zastosowanie jej w projekcie `wheather`. Wewnątrz swego ciała funkcja `fetchWithReplay` ma wołać natywną funkcję `fetch`.
Zauważ, że na potrzeby zadania - cele testowe - zasymulowano niepowodzenie wykonania żądania przez nadpisanie natywnej funkcji `fetch`:
```javascript
function fetch(url) {
    const SUCCESS_RATE = 0.25;
    if (Math.random() < SUCCESS_RATE) {
        return fetch(url);
    }
    return Promise.rejected("Server not available");
}
```

## Użycie
```js
fetchWithRetry(url, 3, 3000)
    .then(response => response.json())
    .then(console.log)
    .catch(err => `Cannot fetch the resource. Detail message:${err.message}`);
```
**lub**
```javascript
try {
    const DELAY_BETWEEN_RETRIES = 5000;
    const RETRY_NO = 2;
    const data = await fetchWithRetry(url, RETRY_NO, DELAY_BETWEEN_RETRIES);
    //...
} catch(err) {
    console.error(`Cannot fetch the resource. Detail message:${err.message}`);
}
```
