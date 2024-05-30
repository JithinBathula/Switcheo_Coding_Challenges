interface WalletBalance {
    currency: string;
    amount: number;
    blockchain: string;
  }
  
  interface FormattedWalletBalance {
    currency: string;
    amount: number;
    formatted: string;
  }
  
  class Datasource {
    url: string;
  
    constructor(url: string) {
      this.url = url;
    }
  
    async getPrices() {
      const response = await fetch(this.url);
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      return response.json();
    }
  }
  
  interface Props extends BoxProps {}
  
  const WalletPage: React.FC<Props> = (props: Props) => {
    const { children, ...rest } = props;
    const balances = useWalletBalances();
    const [prices, setPrices] = useState<{ [key: string]: number }>({});
  
    useEffect(() => {
      const datasource = new Datasource("https://interview.switcheo.com/prices.json");
      datasource.getPrices()
        .then(setPrices)
        .catch(console.error);
    }, []);
  
    const getPriority = (blockchain: string): number => {
      switch (blockchain) {
        case 'Osmosis':
          return 100;
        case 'Ethereum':
          return 50;
        case 'Arbitrum':
          return 30;
        case 'Zilliqa':
          return 20;
        case 'Neo':
          return 20;
        default:
          return -99;
      }
    };
  
    const sortedBalances = useMemo(() => {
      return balances
        .filter((balance: WalletBalance) => {
          const balancePriority = getPriority(balance.blockchain);
          return balancePriority > -99 && balance.amount > 0;
        })
        .sort((lhs: WalletBalance, rhs: WalletBalance) => {
          const leftPriority = getPriority(lhs.blockchain);
          const rightPriority = getPriority(rhs.blockchain);
          return rightPriority - leftPriority;
        });
    }, [balances]);
  
    const rows = sortedBalances.map((balance: WalletBalance, index: number) => {
      const formattedBalance = {
        ...balance,
        formatted: balance.amount.toFixed()
      };
      const usdValue = prices[formattedBalance.currency] * formattedBalance.amount;
  
      return (
        <WalletRow
          className={classes.row}
          key={index}
          amount={formattedBalance.amount}
          usdValue={usdValue}
          formattedAmount={formattedBalance.formatted}
        />
      );
    });
  
    return (
      <div {...rest}>
        {rows}
      </div>
    );
  };
  