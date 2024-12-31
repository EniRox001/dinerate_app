import { useMemo, useState } from 'react'
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import { ConnectionType } from '@/lib/wallet/supported-connectors'
import WalletOption from '../WalletOptions'
import { SUPPORTED_WALLETS } from '@/lib/services/supported-wallets'
import Link from 'next/link'
import Image from 'next/image'
import { METAMASK_URL } from '@/lib/services/chain-config'




const NotConnectedWalletButton = ({buttonClass = ""}) => {
  const [open, setOpen] = useState(false);

  const walletOptions = useMemo(() => {
    return Object.keys(ConnectionType).map((walletKey, index) => {
      const wallet = walletKey as keyof typeof ConnectionType;

      if (typeof window !== 'undefined' && SUPPORTED_WALLETS[wallet]) {
        if (
          SUPPORTED_WALLETS[wallet].name === 'MetaMask' &&
          !window?.ethereum?.isMetaMask
        ) {
          return (
            <InstallMetamaskButton
              key={index}
              walletName={SUPPORTED_WALLETS[wallet].name}
              iconName={SUPPORTED_WALLETS[wallet].iconName}
            />
          );
        }

        return (
          <WalletOption
            key={index}
            walletName={SUPPORTED_WALLETS[wallet].name}
            iconName={SUPPORTED_WALLETS[wallet].iconName}
            connectionType={ConnectionType[wallet]}
            setOpen={setOpen}
          />
        );
      }

      return null;
    });
  }, []);


  return (
    <div className="">
      <Dialog>
        <DialogTrigger className={`btn text-sm px-4 py-3`}>
          Connect Wallet
        </DialogTrigger>

        <DialogContent className="max-w-sm w-full bg-zinc-900 text-white border-0">
          <DialogHeader>
            <DialogTitle>Connect wallet</DialogTitle>
            <DialogDescription>Click any of the below icons to connect your wallet to the app.</DialogDescription>
          </DialogHeader>

          <div className="grid grid-cols-12 gap-4 py-4">{walletOptions}</div>
        </DialogContent>
      </Dialog>
    </div>
  )
}

export default NotConnectedWalletButton







const InstallMetamaskButton = ({
  walletName,
  iconName,
}: {
  walletName: string;
  iconName: string;
}) => {
  return (
    <Link href={METAMASK_URL} target="_blank" className="col-span-6 sm:col-span-4 rounded-md btn bg-white/20 py-2 flex flex-col gap-y-3 items-center">
      <Image width={50} height={50} src={`/img/${iconName}`} alt={walletName} className="" />

      <div className="font-medium text-xs text-center"> Install {walletName} </div>
    </Link>
  );
};