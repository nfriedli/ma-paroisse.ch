while IFS=, read -r field1 field2; 
    do  
        for file in *.md
            do
            echo $file;
            sed -i "s;$field1;$field2;g" $file; 
        done
        
    done < outlinks.csv 