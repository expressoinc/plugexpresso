# PlugExpresso

<p>
<img title="PlugExpresso" src="https://expresso-api.s3.amazonaws.com/emailLogo.png"/>
</p>
# PlugExpresso v1 SDK

### How to use

`npm install plugexpresso` OR `yarn add plugexpresso`

```javascript
import PlugExpresso from 'plugexpresso';

const expresso = new PlugExpresso(PLUGEXPRESSO_SECRET_KEY);
```

## Methods exposed currently (as of v0.1.0)

**1**. **Verify Token**
- Verify Instant Token
- Make Exact Amount Verification

**2**. **Get Payout List (Successful Transaction)**

**3**. **Programmatically Buy Expresso Token (Coming Soon)**

**4**. **Programmatically Create Team and Schedule (Coming Soon)**

## Verify Token

### `Verify Instant Token`

```javascript
import PlugExpresso from 'plugexpresso';

const expresso = new PlugExpresso(PLUGEXPRESSO_SECRET_KEY);

const verify_token = async () => {
  try {
    const payload = {
      email: <EMAIL_ASSOCIATED_TO_TOKEN>,
      token: <EXPRESSO_FOOD_TOKEN>
    };

    const response = await expresso.verify(payload);
    
    console.log(response);
    
  } catch (error) {
    console.log(error);
  }
};
```
### `Exact Amount Verification`

```javascript
import PlugExpresso from 'plugexpresso';

const expresso = new PlugExpresso(PLUGEXPRESSO_SECRET_KEY);

const verify_token = async () => {
  try {
    const payload = {
      email: <EMAIL_ASSOCIATED_TO_TOKEN>,
      token: <EXPRESSO_FOOD_TOKEN>,
      exact_amount: 1000,
      currency: 'ngn'
    };

    const response = await expresso.verify(payload);
    
    console.log(response);
    
  } catch (error) {
    console.log(error);
  }
};
```

## Get Payout List

Vendors can also get list of all successful verification

```javascript
import PlugExpresso from 'plugexpresso';

const expresso = new PlugExpresso(PLUGEXPRESSO_SECRET_KEY);

const get_transaction_list = async () => {
  try {
    const response = await expresso.getPayoutList();
    
    console.log(response);
    
  } catch (error) {
    console.log(error);
  }
};
```


MUCH MORE SOON...
Tokenizing Incentives like. food and much more.
