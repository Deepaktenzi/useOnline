# A react hook for watching device connectivity status

## Install

```ruby
npm i reactjs-hooks

//or

yarn add reactjs-hooks
```

## Usage

```ruby
import { useOnline } from 'reactjs-hooks';

const ComponentName = ()=>{
        const isOnline = useOnline();
        if (!isOnline) {
        return (
        <>
            <h1>You Are Offline, Check Internet Connection </h1>
        </>
        );
    }
}
```
