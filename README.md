## Problemløsning og valg

I dette prosjektet har jeg laget en enkel bookingflyt for fergeavganger, der brukeren kan velge avreisested, destinasjon og dato, og deretter velge en spesifikk avgang.

Utviklingen startet med en løsning bestående av tre sider: en søkeside, en resultatside og en oppsummeringsside. Da oppsettet ikke tok så lang tid som forventet, valgte jeg å flytte søkeresultatene til samme side som søket. Dette ga en mer sømløs brukeropplevelse og gjorde løsningen enklere å håndtere.

Jeg valgte også å lage en egen `DatePicker`-komponent ved bruk av `react-day-picker`, etter å ha prøvd flere alternative løsninger. Dette gjorde det mulig å begrense hvilke datoer brukeren kan velge basert på tilgjengelige avganger og om datoen er passert.

Jeg har også lagt vekt på å gjøre avgangene så lesbare som mulig ved å formatere datoer og reisetid. Det er kun mulig å velge én avgang om gangen, og det er tydelig hvilken avgang som er valgt. Valget resettes også når et nytt søk gjennomføres.

## Utfordringer

Den største utfordringen gjennom prosjektet var at jeg valgte å ikke bruke typer, da jeg vurderte det som et lite prosjekt. Dette førte til at enkelte feil, som feil prop-navn og udefinerte verdier, ikke ble fanget opp tidlig i utviklingen og var vanskeligere å feilsøke.

I tillegg var håndtering av datoer utfordrende, spesielt å sikre at datoformatet var likt mellom kalenderkomponenten og datasettet. Dette skyldtes blant annet at jeg testet flere ulike løsninger underveis.

## Videreutvikling

Dette er funksjonalitet jeg ville forbedret med mer tid:

* **Bruk av typer**
  Dette ville gjort utviklingen mer robust og gjort det enklere å oppdage feil tidlig

* **Forbedret validering i SearchForm**
  Deaktivere søkeknappen dersom ikke alle felt er fylt ut

* **Valg av avgang i søkeresultat**
  Det er per nå ikke mulig å "unselecte" en avgang ved å klikke på den igjen

* **Navigasjon**
  Legge til tilbakeknapp fra oppsummeringssiden til søket

* **Nattavganger**
  Lagt til visning av nattavgang på resultatside og mulighet for å filtrere på dag- og nattavganger

* **Passasjer- og kjøretøyvalg**
  Mulighet for å legge til passasjerer (navn, antall) og valg av kjøretøy

