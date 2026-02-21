

import { cn } from '@heroui/theme'
import React from 'react'

function Container({children, className}) {
    return (
    <>
    <div className={cn(" px-5 sm:px-10 md:px-14 lg:px-16 py-4 overflow-x-hidden",className)}>
        {children}
    </div>
    </>
    )
}

export default Container