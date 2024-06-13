'use server'
import type { BuildFrameData, FrameActionPayload } from '@/lib/farcaster'
import type { Config, State } from '..'
import PageView from '../views/Page'

export default async function page(
    body: FrameActionPayload,
    config: Config,
    state: State,
    params: any
): Promise<BuildFrameData> {
    const { tokenAddress, to, value } = config
    return {
        buttons: [
            {
                label: 'Send',
                action: 'post',
                target: `${process.env.NEXT_PUBLIC_HOST}/api/tx?tokenAddress=${tokenAddress}&to=${to}$value=${value}`
            },
            {
                label: 'Back',
            },
        ],
        inputText: 'Input $Degen',
        component: PageView(config),
        functionName: 'initial',
    }
}