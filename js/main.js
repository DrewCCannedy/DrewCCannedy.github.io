// eslint-disable-next-line no-unused-vars
const changeSelection = (selection) => {
  document.getElementById('links').remove()

  const linkDiv = document.createElement('div')
  linkDiv.setAttribute('id', 'links')

  const links = []

  switch (selection) {
    case 'projects':
      links.push(createLink('github', 'https://github.com/DrewCCannedy'))
      links.push(createLink('eternal-descent', 'resources/Eternal-Descent.zip'))
      document.body.setAttribute('class', 'project')
      break
    case 'music':
      links.push(createLink('bandcamp', 'https://drewcannedy.bandcamp.com'))
      links.push(createLink('soundcloud', 'https://soundcloud.com/drewcan'))
      document.body.setAttribute('class', 'music')
      break
    case 'social':
      links.push(createLink('linkedin', 'https://www.linkedin.com/in/drew-cannedy-87a6b6164/'))
      document.body.setAttribute('class', 'social')
      break
  }

  links.forEach((link) => {
    linkDiv.appendChild(link)
  })

  const container = document.getElementById('container')
  container.appendChild(linkDiv)
}

const createLink = (content, href) => {
  const tempH2 = document.createElement('h2')
  tempH2.innerHTML = content

  const tempLink = document.createElement('a')
  tempLink.setAttribute('href', href)
  tempLink.appendChild(tempH2)

  return tempLink
}
