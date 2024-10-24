'use server'
import type { BuildFrameData } from '@/lib/farcaster'
import { loadGoogleFontAllVariants } from '@/sdk/fonts'
import type { HandlerContext } from '../types'
import CoverView from '../views/cover'

export default async function initial({
    config,
    storage,
}: Omit<HandlerContext, 'body'>): Promise<BuildFrameData> {
    const roboto = await loadGoogleFontAllVariants('Roboto')

    if (!config || Object.keys(config).length === 0) {
        throw new Error('Config is undefined')
    }

    return {
        buttons: [{ label: 'Ask' }],
        inputText: 'Ask a question...',
        fonts: roboto,
        component: CoverView(config),
        handler: 'ask',
        aspectRatio: '1.91:1',
    }
}
