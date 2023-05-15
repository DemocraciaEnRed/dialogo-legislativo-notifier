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
          <ul>
            <li>Legislatura de la Ciudad de Buenos Aires</li>
            <li>Perú 160, C1067AAD (CABA) / TEL: (011) 4338-3000</li>
            <li>Dirección General de Modernización, Fortalecimiento Institucional y Sustentabilidad</li>
            <li>dg.modernizacion@legislatura.gob.ar</li>
          </ul>
          </Span>
        </Item>
      </Box>
    </Item>
  )
}

module.exports = MailFooter
