async function getUser() {
  const inputValue = document.querySelector("#github").value;
  const data = await fetch(`https://api.github.com/users/${inputValue}`).then(
    (response) => response.json()
  );
  console.log(data);
  getGitHubProfileInfos(data);
}

function getGitHubProfileInfos(data) {
  userName.textContent = data.name;
  userBio.textContent = data.bio;
  userLink.href = data.html_url;
  UserImage.src = data.avatar_url;
  userLogin.textContent = data.login;
}

const downloadButton = document.querySelector("#download");

downloadButton.addEventListener("click", () => {
  domtoimage.toBlob(document.getElementById("badge")).then((blob) => {
    window.saveAs(blob, "badge.png");
  });
});
