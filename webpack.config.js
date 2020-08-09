const path = require('path') //MODULO DE NODE
const HtmlWebPackPlugin= require('html-webpack-plugin'); //Para manejar archivos HTML
const MiniCssExtractPlugin = require('mini-css-extract-plugin');



//COFIGURAR TODOS LOS ELEMENTOS QUE NECESITAMOS
module.exports={
    entry: './src/index.js',  //ENTRADA
    output: {  //DONDE SE GUARDAN ARCHIVOS RESULTANTES DESPUES DE LA COMPILACION
        path: path.resolve(__dirname, 'dist'),
        filename: 'bundle.js' //NOMBRE DEL ARCHIVO PINCIPAL
    }, //RESOLVER LAS EXTENSIONES QUE VAMOS A UTILIZAR PARA EL PROYECTO
    resolve:{
        extensions: ['.js', '.jsx']
    },
    module:{
        rules:[//REGLAS PARA EL PROYECTO
            {   //IDENTIFICACION DE ARCHIVOS DE JS Y JSX
                test: /\.(js|jsx)$/, //EXPRESION REGULAR
                exclude: /node_modules/, //EXCLUIMOS NODE_MODULES
                use:{
                    loader: "babel-loader"
                }
            },
            {
                test: /\.html$/,
                use:[
                    {
                        loader: "html-loader"
                    }
                ]
            },
            {
                test: /\.(s*)css$/,
                use: [
                    {
                        loader: MiniCssExtractPlugin.loader,
                    },
                    'css-loader',
                    'sass-loader'
                ]
            },
            {
                test: /\.(png|gif|jpg)$/,
                use: [
                    {
                        'loader': 'file-loader',
                        options: {
                            name: 'assets/[hash].ext'
                        }
                    }
                ]
            },
        ]
    },
    
    plugins:[
        new HtmlWebPackPlugin({
            template: './public/index.html',
            filename: './index.html'
        }),
        new MiniCssExtractPlugin({
            filename: 'assets/[name].css'
        }),
    ]
};