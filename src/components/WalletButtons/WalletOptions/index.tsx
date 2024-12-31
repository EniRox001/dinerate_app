import { Button } from '@/components/ui/button'
import useConnectToWallet from '@/hooks/useConnectToWallet'
import { ConnectionType } from '@/lib/wallet/supported-connectors'
import Image from 'next/image'
import React, { FC } from 'react'

interface OptionsParam {
  walletName: string
  iconName: string
  connectionType: ConnectionType
  setOpen: React.Dispatch<React.SetStateAction<boolean>>
}

const WalletOption: FC<OptionsParam> = ({ walletName, iconName, connectionType, setOpen }) => {
  const connectWallet = useConnectToWallet(connectionType, setOpen)

  return (
    <Button className="col-span-6 sm:col-span-4 rounded-md bg-white/20 py-2 flex items-center flex-col gap-y-3"
      onClick={connectWallet}
    >
      <Image
        src={`/img/${iconName}`}
        height={50}
        width={50}
        alt={`${walletName} logo`}
        className=""
      />

      <div className="text-xs"> {walletName} </div>
    </Button>
  )
}

export default WalletOption