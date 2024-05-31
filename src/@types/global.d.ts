// had to rename from i18n.d.ts to global.d.ts because my components wont detect it

import "i18next"

import Resources from './resources'
import { defaultNSType, i18n } from '../i18n.config'

declare module "i18next" {
  interface CustomTypeOptions {
    defaultNS: defaultNSType
    resources: Resources
  }
}

declare module '*.svg' {
  import { FC, SVGProps } from 'react'
  const content: FC<SVGProps<SVGElement>>
  export default content
}

declare module '*.svg?url' {
  const content: any
  export default content
}
