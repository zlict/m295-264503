// Teil 1
fetch("https://httpbin.org/status/403", { method: "DELETE" })
  .then((response) => {
    if(!response.ok) {
        throw new Error("Geht nicht :(");
    }
    console.log("Erfolgreich!")
  })
  .catch((reason) => { console.error(`Fehler: ${reason.message}`)})
  .finally(() => { console.log("Anfrage abgeschlossen")});

// Teil 2
fetch("https://httpbin.org/status/403", { method: "DELETE" })
  .then((response) => {
    if(!response.ok) {
        throw new Error("Geht nicht :(");
    }
    console.log("Erfolgreich!")
  })
  .catch((reason) => { console.error(`Fehler: ${reason}`)})
  .finally(() => { console.log("Anfrage abgeschlossen")});