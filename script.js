function CreateHTMLElement (tagName, attributes = {}, content = '') {
    this.tagName = tagName,
    this.atributes = attributes,
    this.element = document.createElement(`${tagName}`),
    this.content = content,
    
    this.setAttributes = function (){
        for(let kej in attributes){
            this.element.setAttribute(kej, attributes[kej])
        }
    },

    this.setContent = function (){
        if (typeof this.content === 'string') {
            this.element.textContent = this.content;
        } else if (this.content instanceof HTMLElement) {
            this.element.appendChild(this.content);
        } else if (Array.isArray(this.content)) {
            this.content.forEach(child => {
                if (child instanceof HTMLElement) {
                    this.element.appendChild(child);
                }
            });
        }
    },

    this.render = function (){  
        document.body.appendChild(this.element)
    },

    this.getElement = function(){
        return this.element
    }

    this.setAttributes()
    this.setContent()
    this.render()
}

// EXEMPLE
// const button = new CreateHTMLElement('button',{class:'hiiden',id:"btn"},'My button')