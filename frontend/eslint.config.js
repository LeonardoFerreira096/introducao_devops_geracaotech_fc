import js from "@eslint/js"

import globals from "globals"

export default [
    {ignores: ["coverage/"]},
    js.configs.recommended,
    {
        languageOptions:{
            globals:{
                ...globals.node,
                ...globals.browser,
                ...globals.mocha,
                cy: "readonly",
            },
        },
        rules:{
            "no-unused-vars": "warn",
            "eqeqeq": "error",
            "prefer-const": "error",
            "no-console": "warn"
        },
    },
    
];

