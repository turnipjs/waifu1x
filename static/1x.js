let preview;
let file = new File([1], "a");
let reader = new FileReader();
function previewFile() {
  preview = document.getElementById("preview");
  file = document.getElementById("upload").files[0];
  reader = new FileReader();
  reader.addEventListener(
    "load",
    () => {
      preview.src = reader.result;
    },
    false
  );

  if (file) {
    reader.readAsDataURL(file);
  }
}

function download() {
  let fname = file.name.split(".");
  fname.splice(1, 0, "_@1x.");
  fname = fname.join("");

  let link = document.createElement("a");
  link.download = fname;

  link.href = reader.result;

  link.style.display = "none";
  document.body.appendChild(link);

  link.click();
  document.body.removeChild(link);
}
