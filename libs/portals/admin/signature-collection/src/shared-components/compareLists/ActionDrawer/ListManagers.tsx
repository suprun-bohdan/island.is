import {
  Box,
  Button,
  Drawer,
  Text,
  Table as T,
} from '@island.is/island-ui/core'
import { useLocale } from '@island.is/localization'
import { m } from '../../../lib/messages'

const { Table, Row, Head, HeadData, Body, Data } = T

const ListManagers = () => {
  const { formatMessage } = useLocale()
  return (
    <Box>
      <Drawer
        ariaLabel="managersDrawer"
        baseId="managersDrawer"
        disclosure={
          <Button variant="utility" icon="settings" iconType="outline">
            {formatMessage(m.listManagersTitle)}
          </Button>
        }
      >
        <Text variant="h2" marginTop={2} marginBottom={7}>
          {formatMessage(m.listManagersTitle)}
        </Text>
        <Text variant="h4" marginBottom={3}>
          {formatMessage(m.listManagers)}
        </Text>
        <Table>
          <Head>
            <Row>
              <HeadData style={{ width: '25%' }}>
                {formatMessage(m.nationalId)}
              </HeadData>
              <HeadData>{formatMessage(m.name)}</HeadData>
            </Row>
          </Head>
          <Body>
            <Row>
              <Data>010130-3019</Data>
              <Data>Gervimaður Afríka</Data>
            </Row>
            <Row>
              <Data>010130-2399</Data>
              <Data>Gervimaður Færeyjar</Data>
            </Row>
          </Body>
        </Table>

        <Text variant="h4" marginTop={7} marginBottom={3}>
          {formatMessage(m.listSupervisors)}
        </Text>
        <Table>
          <Head>
            <Row>
              <HeadData style={{ width: '25%' }}>
                {formatMessage(m.nationalId)}
              </HeadData>
              <HeadData>{formatMessage(m.name)}</HeadData>
            </Row>
          </Head>
          <Body>
            <Row>
              <Data>012345-3799</Data>
              <Data>Nafni Nafnasson</Data>
            </Row>
            <Row>
              <Data>012345-3799</Data>
              <Data>Nafni Nafnasson</Data>
            </Row>
            <Row>
              <Data>012345-3799</Data>
              <Data>Nafni Nafnasson</Data>
            </Row>
          </Body>
        </Table>
      </Drawer>
    </Box>
  )
}

export default ListManagers
