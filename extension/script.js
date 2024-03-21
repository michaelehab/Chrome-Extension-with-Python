let pyodide;

async function main() {
  pyodide = await loadPyodide();
  await pyodide.loadPackage("./packages/packaging-24.0-py3-none-any.whl");
  await pyodide.loadPackage("./packages/certifi-2024.2.2-py3-none-any.whl");
  await pyodide.loadPackage(
    "./packages/charset_normalizer-3.3.2-py3-none-any.whl"
  );
  await pyodide.loadPackage("./packages/idna-3.6-py3-none-any.whl");
  await pyodide.loadPackage("./packages/urllib3-2.2.1-py3-none-any.whl");
  await pyodide.loadPackage("./packages/requests-2.31.0-py3-none-any.whl");
  await pyodide.loadPackage("./packages/fetchData-0.1-py3-none-any.whl");
}

main();

document.addEventListener("DOMContentLoaded", function () {
  const sendButton = document.getElementById("sendButton");
  sendButton.addEventListener("click", async function () {
    const inputField = document.getElementById("inputField");
    const userInput = inputField.value;
    // Ensure pyodide is loaded before attempting to use it
    if (pyodide) {
      const output = await pyodide.runPythonAsync(`
        from fetchData import fetchData
        fetchData.fetch_data("${userInput}")
    `);
      document.getElementById("apiResponse").textContent = output;
    } else {
      console.error("Pyodide is not loaded yet.");
    }
  });
});
