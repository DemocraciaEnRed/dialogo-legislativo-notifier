import PropTypes from 'prop-types'
const React = require('react')
const { Item, Span, Box } = require('react-html-email')
const Styles = require('./styles')
const Content = (props) => {
  return (
    <Item style={Styles.contentStyle}>
      <Box style={Styles.boxStyle}>
        <Item align='center' style={Styles.titleContainer}>
          <Span {...Styles.titleStyle}>Portal de <b>Diálogo Legislativo</b></Span>
        </Item>
        {
          !props.showName || !props.name
            ? <Item style={Styles.itemStyle}>
              <Span {...Styles.defaultContentStyle}>
                <b>Hola</b>,
              </Span>
            </Item>
            : <Item style={Styles.itemStyle}>
              <Span {...Styles.defaultContentStyle}>
                <b>Hola {props.name}</b>,
              </Span>
            </Item>
        }
        {props.children}
      </Box>
    </Item>
  )
}

Content.propTypes = {
  children: PropTypes.element
}

module.exports = Content
