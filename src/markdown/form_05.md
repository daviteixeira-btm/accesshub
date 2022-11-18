<Code language='html'>
&lt;html&gt;
    &lt;body&gt;
        &lt;form method="post" action="..."&gt;
            &lt;fieldset&gt;
                &lt;legend&gt;Dados Pessoais&lt;/legend&gt;
                &lt;label for="nome"&gt;O seu Nome: &lt;/label&gt;
                &lt;input type="text" name="nome" id="nome"&gt;
            &lt;/fieldset&gt;
            &lt;fieldset&gt;
                &lt;legend&gt;Dados Profissionais&lt;/legend&gt;
                &lt;label for="profissao"&gt;Sua profissão:&lt;/label&gt;
                &lt;input type="text" id="profissao" name="profissao"&gt;
            &lt;/fieldset&gt;
            &lt;fieldset&gt;
                &lt;legend&gt;Informações de Contato&lt;/legend&gt;
                &lt;label for="email"&gt;E-mail: &lt;/label&gt;
                &lt;input type="text" id="email" name="email"&gt;
            &lt;/fieldset&gt;
            &lt;label for="instituto"&gt;Qual a sua instituição?&lt;/label&gt;
            &lt;select id="instituto" name="instituto"&gt;
                &lt;optgroup label="Rio Grande do Sul"&gt;
                    &lt;option value="ifrs"&gt;IFRS&lt;/option&gt;
                    &lt;option value="ifsul"&gt;IFSUL&lt;/option&gt;
                    &lt;option value="iffarroupilha"&gt;IFFarroupilha&lt;/option&gt;
                &lt;/optgroup&gt;
                &lt;optgroup label="Santa Catarina"&gt;
                    &lt;option value="ifsc"&gt;IFSC&lt;/option&gt;
                    &lt;option value="ifc"&gt;IFC&lt;/option&gt;
                &lt;/optgroup&gt;
                &lt;optgroup label="Paraná"&gt;
                    &lt;option value="ifpr"&gt;IFPR&lt;/option&gt;
                &lt;/optgroup&gt;
            &lt;/select&gt;
        &lt;/form&gt;
    &lt;/body&gt;
&lt;/html&gt;
</Code>