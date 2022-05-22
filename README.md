# (Custom-UI) Customized UI

This repository is React customized ui library also in contains template management system

## Components

### Article

```jsx
<Article />
```

### ArticleListPreview

```jsx
<ArticleListPreview />
```

### Fonts

```jsx
<Fonts href={"https://fonts.googleapis.com/css2?family=Titillium+Web:wght@200;300;400;600&display=swap"} />
```

### Image

```jsx
<Image src={"https://www.example.com/example.png"}/>
```

### Paragraph

```jsx
<Paragraph />
```

### Small

```jsx
<Small>Small Text</Small>
```

### Tag

```jsx
<Tag />
```

### TextHeader

```jsx
<TextHeader text={"Header 1"}>
```
OR
```jsx
<TextHeader>Header 1</TextHeader>
```

### Container

```jsx
<Container></Container>
```

### Grid

```jsx
<GridContainer>
    <GridItem col={12}></GridItem>
    <GridItem col={12}></GridItem>
</GridContainer>
```

### Button

```jsx
<Button type="submit" label="Submit Button"/>
```

### Input

```jsx
<Input name="name" placeholder="Please enter your name"/>
```

### Select

```jsx
<Select name={"language"} values={[{id:"id", name:"name"}]} placeholder="Please Select Language">
```

### TextArea

```jsx
<TextArea placeholder={"Please enter description"}/>
```

### Form

```jsx
<Form></Form>
```

### Icon

```jsx
<Icon name="plus"/>
```

### Footer

```jsx
<Footer />
```

### Slogan

```jsx
<Slogan />
```

### Header

```jsx
<Header/>
```

### Logo

```jsx
<Logo src="https://www.example.com/example.png"/>
```

### Link

```jsx
<Link href="https://www.example.com/example">
```

### SideMenu

```jsx
<SideMenu/>
```

### TemplateManager

```jsx
import { TemplateManager, DarkTemplate, LightTemplate, TemplateProps } from 'customized-ui'

TemplateManager.setTheme(DarkTemplate)
```