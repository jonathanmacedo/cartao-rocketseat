const LinksSocialMedia = {
  github: 'jonathanmacedo',
  youtube: 'jakelinygracielly',
  facebook: 'jonathan.macedo.9003',
  instagram: 'macas_jonthan',
  twitter: 'MaccasJonathan'
}

function changeSocialMediaLinks() {
  for (let li of socialLinks.children) {
    const social = li.getAttribute('class')

    li.children[0].href = `https://${social}.com/${LinksSocialMedia[social]}`
  }
}
changeSocialMediaLinks()

function getGitHubProfileInfos() {
  const url = `https://api.github.com/users/${LinksSocialMedia.github}`
  fetch(url).then(response =>
    response.json().then(data => {
      userName.textContent = data.name
      userBio.textContent = data.bio
      userLink.href = data.html_url
      userPhoto.src = data.avatar_url
      userLogin.textContent = data.login
    })
  )
}
getGitHubProfileInfos()
