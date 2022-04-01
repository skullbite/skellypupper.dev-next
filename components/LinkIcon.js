import { Tooltip } from '@nextui-org/react'

export default ({ href, iconClass, tooltipText }) => <Tooltip content={tooltipText} color="invert">
    <a className={iconClass} href={href} />
</Tooltip>