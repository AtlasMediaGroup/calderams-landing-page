import React from 'react'
import { compose } from 'glamor'

const ValueProp = ({ icon, text, title, text2, marginTop }) => {
  return (
    <div
      {...compose(
        styles.base,
        { marginTop }
      )}
    >
      <i {...compose(styles.icon_inner)}>{icon}</i>
      <div {...compose(styles.content)}>
        <h3 {...compose(styles.title)}>{title}</h3>
        <p {...compose(styles.text)}>{text}</p>
        {text2 ? <p {...compose(styles.text)}>{text2}</p> : null}
      </div>
    </div>
  )
}

ValueProp.defaultProps = {
  marginTop: '3em'
}

let styles = {}

export default ValueProp
