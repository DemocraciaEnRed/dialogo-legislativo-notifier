const React = require('react')
const ReactDom = require('react-dom/server')
const { Email, Item, Span, A, renderEmail, Box, Image } = require('react-html-email')
const Styles = require('./styles')
const { ORGANIZATION_URL } = process.env

const MailFooter = (props) => {
  return (
    <Item style={Styles.footerStyle}>
      <Box align='center'>
        <Item align='center'>
          <Image src={`${ORGANIZATION_URL}/static/assets/logo_fondo_negro.png`} align='center' />
        </Item>
        <Item>
          <Span {...Styles.textStyle}>
            <b>Honorable Cámara de Diputados de la Nación Argentina</b> | Congreso de la Nación Argentina | Av. Rivadavia 1864 - Ciudad Autónoma de Bs. As. (C.P.C1033AAV) | (+5411) 6075-7100
          </Span>
        </Item>
      </Box>
    </Item>
  )
}

module.exports = MailFooter
