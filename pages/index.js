import Head from 'next/head';
import 'mdui/mdui.css';
import 'mdui';
import '../styles/Home.module.css';

export default function Home() {
  return (
    <mdui-container id='app' class="mdui-theme-auto">
      <Head>
        <title>Mealtime Videos</title>
        <link href='https://fonts.googleapis.com/icon?family=Material+Icons' rel='stylesheet'></link>
      </Head>
      <mdui-top-app-bar>
        <mdui-button-icon icon="menu"></mdui-button-icon>
        <mdui-top-app-bar-title>Mealtime Videos</mdui-top-app-bar-title>
        <div style={{flex: '1'}}></div>
        <mdui-button-icon variant="tonal" icon="add"></mdui-button-icon>
        <div style={{width: '20%', backgroundColor: 'var(--mdui-color-surface-bright)'}}>
          <mdui-text-field clearable label="Search videos" end-icon="search"></mdui-text-field>
          <mdui-avatar src="https://avatars.githubusercontent.com/u/1024025?v=4"></mdui-avatar>
        </div>
      </mdui-top-app-bar>
      <mdui-container>
        <h1>Mealtime Videos</h1>
      </mdui-container>
    </mdui-container>
  );
}
