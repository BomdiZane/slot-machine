export function getStyle(componentName, currentTheme) {
  switch (componentName) {
    case 'typography': return getTypographyStyle(currentTheme);
    case 'header': return getHeaderStyle(currentTheme);
    case 'inputStyle': return getInputStyle(currentTheme);
    case 'sectionHeader': return getSectionHeaderStyle(currentTheme);
    case 'socialIcon': return getSocialIconStyle(currentTheme);

    default: return {};
  }
}

export function getTypographyStyle(currentTheme) {
  if (currentTheme === 'dark') return {
    color: 'var(--lightText)'
  };

  if (currentTheme === 'light') return {
    color: 'var(--secondary-blue)'
  };
}

export function getHeaderStyle(currentTheme) {
  if (currentTheme === 'dark') return {
    color: '#6F7F8F'
  };

  if (currentTheme === 'light') return {
    color: 'var(--primary-black)'
  };
}

export function getSocialIconStyle(currentTheme) {
  if (currentTheme === 'dark') return {
    color: 'var(--secondary-grey)'
  };

  if (currentTheme === 'light') return {
    color: 'var(--primary-black)'
  };
}

export function getInputStyle(currentTheme) {
  if (currentTheme === 'dark') return {
    color: 'var(--lightText)'
  };

  if (currentTheme === 'light') return {

  };
}

export function getSectionHeaderStyle(currentTheme) {
  if (currentTheme === 'dark') return {
    color: 'var(--lightText)'
  };

  if (currentTheme === 'light') return {

  };
}
