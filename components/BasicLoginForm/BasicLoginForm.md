## Basic Login Form

We call the **Wrapper** top-level element in the below snippet that is a <form> element that encloses the usual child elements seen in forms.

**Remember** without styled-components any `#id` or `.class` selector would require us making sure it’s not being used across the entire application before modifying.

General you would avoid setting your styled components with the same name as your html element(s) but in our case when it has good semantic meaning like Label then it’s fine.

If you have different designs for the same html element type like <input> type='text' vs type='checkbox', then a good descriptions between the two of them would be TextInput and CheckInput for example.

Lastly, without nesting support we would have to declare a separate rule for the same element. Just so that we can target that element's different state like :hover, :focus etc... But styled components supports nesting using `&` ampersand.

It acts as a **placeholder** so that when React renders the component and the library generates a hashed className, it pops that unique class name there.
